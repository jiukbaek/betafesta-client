const number = [
  {
    value: 0,
    active: [0, 1, 2, 4, 5, 6],
  },
  {
    value: 1,
    active: [2, 6],
  },
  {
    value: 2,
    active: [1, 2, 3, 4, 5],
  },
  {
    value: 3,
    active: [1, 2, 3, 5, 6],
  },
  {
    value: 4,
    active: [0, 2, 3, 6],
  },
  {
    value: 5,
    active: [0, 1, 3, 5, 6],
  },
  {
    value: 6,
    active: [0, 1, 3, 4, 5, 6],
  },
  {
    value: 7,
    active: [1, 2, 6],
  },
  {
    value: 8,
    active: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    value: 9,
    active: [0, 1, 2, 3, 5, 6],
  },
  {
    value: "-",
    active: [3],
  },
];
const lineArray = [
  "40,80 60,60 80,80 75,160 55,180 35,160",
  "63,57 83,37 147,37 167,57 147,77 83,77",
  "150,80 170,60 190,80 185,160 165,180 145,160",
  "58,183 78,163 142,163 162,183 142,204 78,204",
  "35,206 55,187 75,207 70,287 50,307 30,287",
  "53,310 73,290 137,290 157,310 137,330 73,330",
  "145,206 164,187 185,207 180,287 160,307 140,287",
];

interface DigitanNumberProp {
  nums: string;
  width?: string;
  height?: string;
  color?: string;
  unActiveColor?: string;
  backgroundColor?: string;
  transition?: string;
}

const DigitalNumber: React.FC<DigitanNumberProp> = ({
  nums = "",
  width = "100%",
  height = "auto", // if you wanna auto use 100%
  color = "#FF0000",
  unActiveColor = "rgba(50, 0, 0, 1)",
  backgroundColor = "rgba(20, 0, 0, 0.3)",
  transition = "none",
}) => {
  let numsArray = nums ? nums.split("") : ["0"];
  numsArray = numsArray.filter((item) => {
    return /[0-9.-]/g.test(`${item}`);
  });
  const isActive = (num: string, lineIndex: number) => {
    const activeNum = number.find((item) => {
      return num === `${item.value}`;
    }) as any;
    return activeNum.active.includes(lineIndex);
  };
  return (
    <div
      style={{
        background: backgroundColor,
        display: "flex",
        width: width,
        height: height,
        transition: transition ? transition : "none",
      }}
    >
      {numsArray.map((item, index) => {
        if (item === ".") {
          return (
            <svg
              /* eslint-disable-next-line react/no-array-index-key */
              key={`${item}-${index}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 228 376"
              width="40%"
              height="100%"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <polygon
                  points="80,500 80,420 160,420 160,500"
                  style={{ fill: color }}
                />
              </g>
            </svg>
          );
        }
        return (
          <svg
            key={`${item}-${index}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 228 376"
            width="100%"
            height="100%"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              {lineArray.map((line, lineIndex) => {
                return (
                  <polygon
                    key={line}
                    points={line}
                    style={{
                      fill: isActive(item, lineIndex) ? color : unActiveColor,
                    }}
                  />
                );
              })}
            </g>
          </svg>
        );
      })}
    </div>
  );
};

export default DigitalNumber;
