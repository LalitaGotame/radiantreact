export default function FieldBox({
  label,
  required = false,
  error,
  children,
}) {
  return (
    <div className="mb-1">
      <div className={`field-box ${error ? 'has-error' : ''}`}>
        <span className="field-label">
          {label}
          {required && <span className="required">*</span>}
        </span>
        {children}
      </div>
      {error && <span className="invalid-msg">{error}</span>}
    </div>
  )
}
