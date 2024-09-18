from flask import Flask, request, jsonify, session
from werkzeug.exceptions import BadRequest

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'

# Dummy data for demonstration purposes
industries = {
    'manufacturing': ['maintenance engineer', 'shift supervisor'],
    'retail': ['store manager', 'buyer']
}

# Define your login handling logic here
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    industry = data.get('industry')
    role = data.get('role')
    username = data.get('username')
    password = data.get('password')
    
    if not industry or not role or not username or not password:
        raise BadRequest('Missing required parameters')
    
    # Simulate user authentication
    if username == 'user' and password == 'pass':
        session['user'] = {'username': username, 'industry': industry, 'role': role}
        return jsonify({'message': 'Login successful', 'user': session['user']})
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

# Get industries
@app.route('/api/industries', methods=['GET'])
def get_industries():
    return jsonify(list(industries.keys()))

# Get roles
@app.route('/api/roles', methods=['POST'])
def get_roles():
    """
    Endpoint to fetch roles based on the provided industry.
    This method expects an 'industry' key in the JSON payload of the POST request.
    """
    # Attempt to get the JSON payload from the POST request
    data = request.get_json()
    if not data:
        return jsonify({'error': 'Request must be JSON and contain industry data'}), 400

    # Extract the industry from the data payload
    industry = data.get('industry')
    
    # Check if the 'industry' is provided and valid
    if not industry:
        return jsonify({'error': 'Industry parameter is required'}), 400
    if industry not in industries:
        return jsonify({'error': 'Invalid industry provided'}), 404

    # Return the roles associated with the industry
    return jsonify({
        'industry': industry,
        'roles': industries[industry]
    })


# Define your classification and query handling logic here
@app.route('/api/classify-question', methods=['POST'])
def classify_question():
    question = request.json.get('question')
    if not question:
        raise BadRequest('Question parameter is required')
    
    # Here you would integrate your model for question classification
    category = 'data'  # Example fixed response
    return jsonify({'question': question, 'category': category})


@app.route('/api/query', methods=['POST'])
def query():
    query = request.json.get('query')
    if not query:
        raise BadRequest('Query parameter is required')
    
    # Here you would integrate your data fetching logic
    response = {'data': 'simulated response for query: ' + query}
    return jsonify(response)

# Speech to Text API
@app.route('/api/speech-to-text', methods=['POST'])
def speech_to_text():
    # Here you would integrate your Azure Speech Service
    return jsonify({'transcript': 'simulated transcript'})

# Error handler for bad request
@app.errorhandler(400)
def bad_request(error):
    return jsonify({'error': 'Bad request', 'message': str(error)}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
