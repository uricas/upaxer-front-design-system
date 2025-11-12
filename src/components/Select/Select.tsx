import React from 'react';
import './Select.scss';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { value: string; label: string }[];
    placeholder?: string;
    readOnly?: boolean;
}

export const Select = ({ 
    label, 
    options, 
    placeholder = 'Selecciona...', 
    readOnly = false, 
    className, 
    value,
    ...props 
}: SelectProps) => {
    
    const containerClasses = `select ${readOnly ? 'readonly' : ''} ${className || ''}`.trim();
    const selectClasses = `placeholder-text ${value ? 'is-filled' : ''}`.trim();

    // In readonly mode, we display the selected value's label in a non-interactive way.
    if (readOnly) {
        const selectedOption = options.find(opt => opt.value === value);
        return (
            <div className={containerClasses}>
                <div className="label-group">
                    <label className="label-text">{label}</label>
                    <span className="obligatorio">*</span>
                </div>
                <div className="inputStandard">
                   <div className="readonly-text">{selectedOption ? selectedOption.label : 'Item'}</div>
                </div>
            </div>
        );
    }

    return (
        <div className={containerClasses}>
            <div className="label-group">
                <label className="label-text">{label}</label>
                <span className="obligatorio">*</span>
            </div>
            <div className="inputStandard">
                <select 
                    className={selectClasses}
                    value={value || ""} // Controlled component
                    {...props}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="arrow_drop_down">
                    <div className="icon"></div>
                </div>
            </div>
        </div>
    );
};
