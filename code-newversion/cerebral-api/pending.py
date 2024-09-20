def generate_recommendations(question, response, result):

        conversation=[
            {
                "role": "system",
                "content": """
                I am an agent specialized in technical support for automobile manufacturing, particularly skilled in the maintenance, support, and operation of automotive assembly lines. My role is to interpret user questions with expertise, analyze production data, and provide proactive recommendations to optimize assembly line operations. Give me the Interpretation and response, including data analysis and proactive recommendations separeted in different paragraphs. Instructions:
                1. Avoid technological terms and explanations that the solution was built with such as InfluxDb, bucket, etc, keep it like an automotive manufacturing plant manager.
                2. Format should be <h3>Interpretation:</h3>Generated text <h3>Data Analysis:</h3>Generated text <h3>Proactive Recommendations:</h3>Generated text<BR></BR>."""
                
            }
        ]

        conversation.append({"role": "user", "content": f"question: {question} and data received: {result} and row data {response}"})

        response = clientRecommendations.chat.completions.create(
                model=MODEL_NAME,
                messages=conversation
            )
        
        conversation.append({"role": "system", "content": response.choices[0].message.content})
        print(response.choices[0].message.content)

        return response.choices[0].message.content

    def chat_with_openai_for_data(question):
        print("chat_with_openai_for_data")

        conversation=[
            {
                "role": "system",
                "content": f"""
                User submits a query regarding the manufacturing process. Generate an InfluxDB query for data from the '{INFLUXDB_BUCKET}' bucket using the specified fields:
                - plant, country, assembly_line, car_id, model, color, engine_type, assembly_status, shift, Drive1_Voltage, Cooler_ON, Fan001_On, Heater_ON, Pump1_Temperature_Flow, Pump2_Temperature_Flow, Pump3_Temperature_Flow, Pumps_Total_Flow, Pressure_Filter_Inlet, Pressure_Filter_Outlet, RobotPosition_J0, RobotPosition_J1, RobotPosition_J2, RobotPosition_J3, RobotPosition_J4, RobotPosition_J5, Tank_Level, Drive1_Current, Drive1_Frequency, Drive1_Speed, Drive2_Current, Drive2_Frequency, Drive2_Speed, Drive2_Voltage, Current, Voltage, Temperature, Humidity, VacuumAlert, VacuumPressure, Oiltemperature, OiltemperatureTarget, Waste, WasteReason, LostTime, LostTimeReason, LostTimeTimeCount, ScheduledBatteries, CompletedBatteries, ScheduledBatteriesPerHour, ImpactTest, VibrationTest, CellTest, DownTime, Thruput, OverallEfficiency, Availability, Performance, Quality, PlannedProductionTime, ActualRuntime, UnplannedDowntime, PlannedDowntime, PlannedQuantity, ActualQuantity, RejectedQuantity, OEE_GoalbyPlant, OEE_Mexico, OEE_BatteryA, OEE_BatteryB, OEE_BatteryC

                Instructions:

                1. Determine if the query seeks the latest data point or spans a specific time period. Default to data from the last hour if unspecified.
                2. Construct an InfluxDB query specific to the '{INFLUXDB_BUCKET}' bucket that includes ["_measurement"] == "assemblyline" and identifies the relevant _field for the query.
                3. If the query relates to real-time production line telemetry, Advaris, ODEN, QAD, or Quality cost, create the query. Otherwise, indicate "No data available."
                4. Provide the complete InfluxDB query or a statement on data availability.
                5. Just give me the query.
                6. Remove additional text such as comments # or " or ''' or ''' or ```
                Example Outputs:

                Query: "What is the latest Drive1 Speed at the Monterrey plant?"
                Output: from(bucket: "{INFLUXDB_BUCKET}") |> range(start: -1m) |> filter(fn: (r) => r["_measurement"] == "assemblyline") |> filter(fn: (r) => r["_field"] == "Drive1_Speed") |> last())
                Query: "Assembly statuses over the past two days?"
                Output: from(bucket: "{INFLUXDB_BUCKET}") |> range(start: -48h) |> filter(fn: (r) => r["_measurement"] == "assemblyline") |> filter(fn: (r) => r["_field"] == "assembly_status")
                Query: "What is the staff's favorite lunch?"
                Output: "No data available."
                """
            }
        ]

        conversation.append({"role": "user", "content": question})

        response = client2.chat.completions.create(
                model=MODEL_NAME,
                messages=conversation
            )
        
        conversation.append({"role": "system", "content": response.choices[0].message.content})
        print(response.choices[0].message.content)

        clean_response = clean_string(response.choices[0].message.content)

        #return response.choices[0].message.content
        return clean_response

    def clean_string(original_string):
        clean_string = original_string.replace("```", "")
        clean_string = clean_string.replace("Output:", "")
        clean_string = clean_string.replace("Query:", "")
        return clean_string

    def chat_with_local_llm(question):
        conversation.append({"role": "user", "content": question})

        response = client.chat.completions.create(
                model=MODEL_NAME,
                messages=conversation
            )
        #print(response.choices[0].message.content)
        conversation.append({"role": "system", "content": response.choices[0].message.content})

        #print(response)
        return response.choices[0].message.content

    #def fetch_graph_data(data):
    #    print("fetch_graph_data")
    #    raw_data = data
    #    times = [data['_time'].strftime("%Y-%m-%d %H:%M:%S") for data in raw_data]
    #    values = [data['_value'] for data in raw_data]
    #    return times, values
