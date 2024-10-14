/* eslint-disable react/prop-types */
function FormField({ name, type, placeholder, value, onChange, label, values, options, chosen }) {
    return (
        <>{type === "dropdown" ? <select value={value} onChange={onChange} name={name}>
            {values.map((value, idx) => <option key={idx} value={value}>{value}</option>)}
        </select> : <input id={name} value={value} onChange={onChange} name={name} type={type} placeholder={placeholder} />}
            {chosen ? chosen : null}
            {label ? <label id={name} htmlFor={name}>{label}</label> : null}
        </>
    )
}
export default function Form({ formFields, onSubmit, error, errorMessages }) {

    return <form onSubmit={onSubmit}>
        {
            formFields.map((field, index) => (
                <>
                    <FormField value={field.value} onChange={field.onChange} name={field.name} type={field.type} label={field?.label} placeholder={field?.placeholder} chosen={field?.chosen} key={index} values={field?.values} options={field?.options} />
                    {error[field.name] ? <p>{errorMessages[field.name].message}</p> : null

                    }
                </>
            ))
        }
        <button type="submit">Submit</button>
    </form >

}

