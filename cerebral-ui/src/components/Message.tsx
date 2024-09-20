import * as React from "react";
import {
  MessageBar,
  MessageBarTitle,
  MessageBarBody,
  Button,
  MessageBarActions,
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";

interface MessageProps {
  onCopilotOpen: () => void;
}

const Message: React.FC<MessageProps> = ({ onCopilotOpen }) => {
  const handleClick = () => { onCopilotOpen(); };
  return (
    <MessageBar intent={"error"}>
      <MessageBarBody>
        <MessageBarTitle>HotMelt sensor has errors</MessageBarTitle>
        Copilot detects that the HotMelt sensor in FFR2 line has errors happened
        in 3 hours ago
      </MessageBarBody>
      <MessageBarActions
        containerAction={
          <Button appearance="transparent" icon={<DismissRegular />} />
        }
      >
        <Button
          appearance="outline"
          onClick={() => handleClick()}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.0722 3.66246C16.7827 2.67691 15.8784 2 14.8512 2L14.1735 2C13.0569 2 12.0994 2.7971 11.897 3.8952L10.7119 10.3247L11.0335 9.22215C11.3216 8.23453 12.2269 7.55555 13.2557 7.55555L17.1772 7.55556L18.8242 8.19709L20.4119 7.55556H19.9483C18.9212 7.55556 18.0168 6.87864 17.7273 5.89309L17.0722 3.66246Z"
                fill="url(#paint0_radial_331_18742)"
              />
              <path
                d="M7.16561 20.3279C7.45189 21.3182 8.35852 21.9998 9.38937 21.9998H10.8432C12.0912 21.9998 13.1145 21.0105 13.1567 19.7632L13.3712 13.4199L12.9681 14.7849C12.6776 15.7689 11.774 16.4443 10.7481 16.4443L6.78679 16.4443L5.37506 15.6785L3.84668 16.4443H4.3025C5.33335 16.4443 6.23998 17.1259 6.52626 18.1162L7.16561 20.3279Z"
                fill="url(#paint1_radial_331_18742)"
              />
              <path
                d="M14.7507 2H6.73041C4.43891 2 3.06401 5.02777 2.14741 8.05553C1.06148 11.6426 -0.359484 16.4401 3.75146 16.4401H7.21482C8.24955 16.4401 9.15794 15.7559 9.44239 14.7611C10.0445 12.6551 11.0997 8.98146 11.9285 6.18489C12.3497 4.76367 12.7005 3.5431 13.239 2.783C13.5409 2.35686 14.044 2 14.7507 2Z"
                fill="url(#paint2_linear_331_18742)"
              />
              <path
                d="M14.7507 2H6.73041C4.43891 2 3.06401 5.02777 2.14741 8.05553C1.06148 11.6426 -0.359484 16.4401 3.75146 16.4401H7.21482C8.24955 16.4401 9.15794 15.7559 9.44239 14.7611C10.0445 12.6551 11.0997 8.98146 11.9285 6.18489C12.3497 4.76367 12.7005 3.5431 13.239 2.783C13.5409 2.35686 14.044 2 14.7507 2Z"
                fill="url(#paint3_linear_331_18742)"
              />
              <path
                d="M9.24927 21.9997H17.2695C19.561 21.9997 20.9359 18.9719 21.8525 15.9441C22.9384 12.357 24.3594 7.55957 20.2485 7.55957H16.7851C15.7504 7.55957 14.842 8.24374 14.5575 9.2386C13.9554 11.3446 12.9002 15.0182 12.0714 17.8148C11.6502 19.236 11.2994 20.4566 10.7609 21.2167C10.4591 21.6428 9.95595 21.9997 9.24927 21.9997Z"
                fill="url(#paint4_radial_331_18742)"
              />
              <path
                d="M9.24927 21.9997H17.2695C19.561 21.9997 20.9359 18.9719 21.8525 15.9441C22.9384 12.357 24.3594 7.55957 20.2485 7.55957H16.7851C15.7504 7.55957 14.842 8.24374 14.5575 9.2386C13.9554 11.3446 12.9002 15.0182 12.0714 17.8148C11.6502 19.236 11.2994 20.4566 10.7609 21.2167C10.4591 21.6428 9.95595 21.9997 9.24927 21.9997Z"
                fill="url(#paint5_linear_331_18742)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_331_18742"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(18.9994 10.3791) rotate(-128.978) scale(8.73886 8.198)"
                >
                  <stop offset="0.0955758" stop-color="#00AEFF" />
                  <stop offset="0.773185" stop-color="#2253CE" />
                  <stop offset="1" stop-color="#0736C4" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_331_18742"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(5.57463 16.2451) rotate(52.4153) scale(8.16508 7.88004)"
                >
                  <stop stop-color="#FFB657" />
                  <stop offset="0.633728" stop-color="#FF5F3D" />
                  <stop offset="0.923392" stop-color="#C02B3C" />
                </radialGradient>
                <linearGradient
                  id="paint2_linear_331_18742"
                  x1="6.25039"
                  y1="3.7497"
                  x2="7.39413"
                  y2="16.985"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.156162" stop-color="#0D91E1" />
                  <stop offset="0.487484" stop-color="#52B471" />
                  <stop offset="0.652394" stop-color="#98BD42" />
                  <stop offset="0.937361" stop-color="#FFC800" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_331_18742"
                  x1="7.25046"
                  y1="2"
                  x2="7.87502"
                  y2="16.4401"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3DCBFF" />
                  <stop
                    offset="0.246674"
                    stop-color="#0588F7"
                    stop-opacity="0"
                  />
                </linearGradient>
                <radialGradient
                  id="paint4_radial_331_18742"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(20.6605 6.14578) rotate(109.282) scale(19.1879 22.994)"
                >
                  <stop offset="0.0661714" stop-color="#8C48FF" />
                  <stop offset="0.5" stop-color="#F2598A" />
                  <stop offset="0.895833" stop-color="#FFB152" />
                </radialGradient>
                <linearGradient
                  id="paint5_linear_331_18742"
                  x1="21.2941"
                  y1="6.67797"
                  x2="21.2859"
                  y2="10.6109"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0581535" stop-color="#F8ADFA" />
                  <stop
                    offset="0.708063"
                    stop-color="#A86EDD"
                    stop-opacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>
          }
        >
          Ask Cerebral
        </Button>
      </MessageBarActions>
    </MessageBar>
  );
};

export default Message;
