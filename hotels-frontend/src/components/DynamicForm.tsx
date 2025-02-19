import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

type FieldType = "text" | "number" | "select" | "image" | "checkbox";

type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: { value: string | number; label: string }[]; // Para selects
  defaultValue?: any;
  validation?: Yup.AnySchema; // Validación opcional para Yup
};

type DynamicFormProps = {
  fields: FieldConfig[];
  onSubmit: (formData: Record<string, any>) => void;
};

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue || (field.type === "checkbox" ? false : "");
    return acc;
  }, {} as Record<string, any>);

  const validationSchema = Yup.object(
    fields.reduce((acc, field) => {
      if (field.validation) {
        acc[field.name] = field.validation;
      }
      return acc;
    }, {} as Record<string, Yup.AnySchema>)
  );

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label className="mb-1 font-medium" htmlFor={field.name}>
            {field.label}
          </label>
          {field.type === "select" && field.options ? (
            <select
              id={field.name}
              name={field.name}
              value={formik.values[field.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border p-2 rounded"
            >
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === "image" ? (
            <input
              type="file"
              id={field.name}
              name={field.name}
              onChange={(e) => {
                const file = e.target.files?.[0];
                formik.setFieldValue(field.name, file);
              }}
              className="border p-2 rounded"
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formik.values[field.name]}
              checked={field.type === "checkbox" ? formik.values[field.name] : undefined}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border p-2 rounded"
            />
          )}
          {formik.touched[field.name] && formik.errors[field.name] && typeof formik.errors[field.name] === 'string' ? (
            <div className="text-red-500 text-sm">{formik.errors[field.name] as string}</div>
          ) : null}
        </div>
      ))}
      <button type="submit" className="bg-black text-white p-2 rounded w-16">
        Crear
      </button>
    </form>
  );
};

export default DynamicForm;