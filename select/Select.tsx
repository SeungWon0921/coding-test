// andrew0314@naver.com, 장원석
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { ChangeEvent, ReactNode } from "react";

type Options = Array<{ value: string; label: string }>;

type SelectProps = {
  value?: string | null;
  options: Options | (() => Promise<Options>);
  onChange?: (value: string) => void;
};

/**
 * @description https://mui.com/material-ui/react-autocomplete/#combo-box 에서 Autocomplete > Combo를 참고해 아래의 기능을 구현하세요.
 * - `Select`의 폭은 선택 가능한 option들 중 가장 폭이 넓은 것에 맞춰져 있어야 합니다. 즉 어떤 option이라도 그것이 선택되었을 때, 잘린 채로 표시되어서는 안 됩니다.
 * - option을 검색할 수 있어야 합니다. option을 선택하지 않고, focus가 `Select`를 벗어난 경우에는, 검색어가 삭제되어야 합니다.
 * - 마우스 뿐 아니라 키보드를 사용해도 option을 선택할 수 있어야 합니다.
 * - `Select`를 클릭하거나 `Select`에서 위 방향 또는 아래 방향 키보드를 누르면 선택 가능한 option들이 나타나야 합니다.
 * - 클릭하거나 엔터키를 누르는 것으로 option을 선택할 수 있어야 합니다.
 * - 선택 가능한 option들이 나타날 때, 선택된 option이 있다면, 선택된 그 option이 보여야 하고, 강조되어야 하며, 키보드를 이용해 option을 순회할 때 선택된 option이 시작 지점이 되어야 합니다.
 * - 선택 가능한 option들이 나타날 때, option들이 스크린을 벗어나지 않아야 합니다. 예를 들어, `Select` 아래쪽에 선택 가능한 option들이 나타나기에 공간이 부족하다면, 선택 가능한 option들은 위쪽에 나타나야 합니다.
 * - `Select`가 hover 되는 경우와 focus 되는 경우, 그리고 두 경우가 아닌 경우에 대해 `Select`의 스타일이 달라야 합니다.
 */
function Select(props: SelectProps): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [items, setItems] = useState<Options>([]);
  const [highlightedLabel, setHighlightedLabel] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof props.options === "function") {
        const data = await props.options();
        setItems(data);
      } else {
        setItems(props.options);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <input
          value={selectedOption}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          placeholder="영화를 선택하세요"
          style={{ width: "15%", height: "30px", padding: "10px" }}
        />
        {selectedOption && (
          <button
            onClick={() => setSelectedOption("")}
            style={{
              position: "relative",
              top: "3px",
              right: "35px",
              border: "none",
              background: "transparent",
              color: "#999",
              fontSize: "20px",
            }}
          >
            X
          </button>
        )}
      </div>
      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #ccc",
            width: "15%",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {items.map((option, index) => (
            <span
              tabIndex={index}
              key={option.value}
              onMouseDown={() => setSelectedOption(option.label)}
              onMouseEnter={() => setHighlightedLabel(index)}
              style={{
                padding: "5px 10px",
                backgroundColor:
                  index === highlightedLabel ? "lightgray" : "white",
              }}
            >
              {option.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export { Select };
