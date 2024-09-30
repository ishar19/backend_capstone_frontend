/* eslint-disable react/prop-types */
function FormField({ name, type, placeholder, value, onChange }) {
    return (
        <input value={value} onChange={onChange} name={name} type={type} placeholder={placeholder} />
    )
}
export default function Form({ formFields, onSubmit, error, errorMessages }) {

    return <form onSubmit={onSubmit}>
        {
            formFields.map((field, index) => (
                <>
                    <FormField value={field.value} onChange={field.onChange} name={field.name} type={field.type} placeholder={field.placeholder} key={index} />
                    {error[field.name] ? <p>{errorMessages[field.name].message}</p> : null

                    }
                </>
            ))
        }
        <button type="submit">Submit</button>
    </form >

}