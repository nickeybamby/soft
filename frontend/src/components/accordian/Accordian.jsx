import './accordian.css'
import data from "./data";
import datas from "./datas";
import { useState } from "react";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <section className="accordian__container section__container">
        <h3 className='pb-5 '>FAQs</h3>
      <div className="accordian__wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title font-medium"
              >
                <h3 className='accordian__title'>{dataItem.question}</h3>
                <span className='cursor-pointer plus__drop'>+</span>
              </div>
              {selected === dataItem.id ? (
                <p className='accordian__text'>{dataItem.answer}</p>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>

      {/* right accordian */}
      <div className="accordian">
        {datas && datas.length > 0 ? (
          datas.map((datasItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(datasItem.id)}
                className="title font-medium"
              >
                <h3 className='accordian__title'>{datasItem.question}</h3>
                <span className='cursor-pointer plus__drop'>+</span>
              </div>
              {selected === datasItem.id ? (
                <p className='accordian__text'>{datasItem.answer}</p>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
    </section>
  );
}
