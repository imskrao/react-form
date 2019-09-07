import React from 'react'

export default function FormFields(props) {

    const renderFields = () => {
        const formArray = [];

        for(let elementName in props.formData) {
            formArray.push({
                id: elementName,
                settings: props.formData[elementName]
            })
        }

        return formArray.map((item, i) => {
            return (
                <div key={i} className="form_elements">
                    {renderTemplate(item)}
                </div>
            )
        })
    }

    const showLable = (show, lable) => {
        return show ? <label>{lable}</label> : null;
    }

    const changeHandler = (event, id) => {
        // console.log(event.target.value);

        const newState = props.formData;

        newState[id].value = event.target.value;
        props.change(newState);
    }

    const renderTemplate = (data) => {
        let formTemplate = '';
        let value = data.settings;

        switch(value.element) {
            case('input'):
                formTemplate= (
                    <div>
                        {showLable(value.label, value.labelText)}
                        <input
                            // type={value.config.type}
                            {...value.config}
                            value={value.value}
                            onChange={
                                (event) => changeHandler(event, data.id)
                            }
                        />
                    </div>
                )

                break;

            case('textarea'):
                formTemplate = (
                    <div>
                        {showLable(value.label, value.labelText)}
                        <textarea {...value.config}
                        value={value.value}
                            onChange={
                                (event) => changeHandler(event, data.id)
                            }>
                            </textarea>
                    </div>
                )
                break;
            case('select'):
                formTemplate = (
                    <div>
                        {showLable(value.label, value.labelText)}
                        <select
                            value={value.value}
                            name={value.config.name}
                            onChange={
                                (event) => changeHandler(event, data.id)
                            }
                            >
                                {value.config.options.map((item, i) => {
                                    return (
                                        <option key={i} value={item.val}>{item.text}</option>
                                    )
                                })}
                        </select>
                    </div>
                )
                break;
            default:
                formTemplate = null;
        }
        return formTemplate;
    }

    return (
        <div>
            {renderFields()}
        </div>
    )
}
