import React from "react"

class DrugInformationComponent extends React.Component {

    render() {
        const items = [];

        if(this.props.drugInfo.properties) {
            for (let [key, value] of Object.entries(this.props.drugInfo.properties)) {
              let array = [];
              if(key !== "openfda") {
                  array.push(key.split("_").join(" "));
                  array.push(value);
                  items.push(array);
              } else {
                  array.push("Open FDA");
                  let arr = [];
                  for (let [k, v] of Object.entries(value)) {
                      let a = [];
                      a.push(k.split("_").join(" "));
                      a.push(v);
                      arr.push(a);
                  }
                  array.push(arr);
                  items.unshift(array);
              }
            }
        }

        return (
            <div className="drug-information-container">
                <div className="section">
                    {items && items.map((item, index) => {
                         return (
                            <div key={index} className={"item item-" + index}>
                                {item[0] !== "Open FDA" && <div className="item-container">
                                    <p className="label">{item[0]}</p>
                                    {Array.isArray(item[1]) && item[1].length > 1 && <ul className="list-of-information">
                                        {item[1].length > 1 && item[1].map((value, i) => {
                                            return (
                                                <div key={i} className="list-item-container">
                                                    {!value.includes("<table") && <li className="list-item">{value.toString()}</li>}
                                                    {value.includes("<table") && <li className="table" dangerouslySetInnerHTML={{ __html: value }}></li>}
                                                </div>
                                            )
                                        })}
                                    </ul>}
                                    {Array.isArray(item[1]) && item[1].length === 1 && item[1].map((value, i) => {
                                        return (
                                            <div key={i} className="item-information-container">
                                                {!value.includes("<table") && <p className="item-information">{value.toString()}</p>}
                                                {value.includes("<table") && <div className="table" dangerouslySetInnerHTML={{ __html: value }}></div>}
                                            </div>
                                        )
                                    })}
                                    {!Array.isArray(item[1]) && <p className="information">{item[1].toString()}</p>}
                                </div>}

                                {item[0] === "Open FDA" && <div className="item-container">
                                    <p className="label">{item[0]}</p>
                                    <ul className="list-of-items">
                                    {item[1].map((it, ind) => {
                                        return (
                                            <div key={ind} className={"item item" + ind}>
                                                <li className="label">{it[0]}</li>
                                                {Array.isArray(it[1]) && it[1].length > 1 && <ul className="list-of-information">
                                                    {it[1].length > 1 && it[1].map((value, i) => {
                                                        return <li key={i} className="list-item">{value.toString()}</li>
                                                    })}
                                                </ul>}
                                                {Array.isArray(it[1]) && it[1].length === 1 && it[1].map((value, i) => {
                                                    return <p key={i} className="item-information">{value.toString()}</p>
                                                })}
                                                {!Array.isArray(it[1]) && <p className="information">{it[1].toString()}</p>}
                                            </div>
                                        )
                                    })}
                                    </ul>
                                </div>}
                            </div>
                         )
                    })}
                </div>
            </div>
        )
    }
}

export default DrugInformationComponent
