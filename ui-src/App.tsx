import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function App() {
  useEffect(() => {
    if (typeof parent !== undefined) {
      parent?.postMessage?.({ pluginMessage: "hello" }, "*");
    }
  }, []);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      cardtitle: "",
      description: "",
      cardassignment: "",
      duedate: "",
    },
  });

  return (
    <form
      className="flex flex-col justify-between h-full mx-4 py-4 mb-4"
      onSubmit={handleSubmit((values) => {
        console.log(values);
        parent.postMessage(
          {
            pluginMessage: {
              type: "addData",
              payload: {
                ...values,
              },
            },
          },
          "*"
        );
      })}
    >
      <div className="space-y-4 mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Card Title
          <div className="mt-1">
            <input
              type="text"
              className="shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent block w-full sm:text-sm border border-gray-300 rounded-md py-1 px-2"
              placeholder="TUK Landing - Header issue"
              {...register("cardtitle", { required: true })}
            />
          </div>
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Description
          <div className="mt-1">
            <textarea
              // type="text"
              rows={3}
              className="shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent block w-full sm:text-sm border border-gray-300 rounded-md py-1 px-2"
              placeholder="The Landing Page of TUK components needs to be fixed immediately."
              {...register("description", { required: true })}
            />
          </div>
        </label>

        <label className="block text-sm font-medium text-gray-700">
          <div className="flex justify-between">
            <span>Assigned to</span>
            <span className="text-sm text-gray-500" id="email-optional">
              Optional
            </span>
          </div>
          <div className="mt-1">
            <input
              type="text"
              className="shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent block w-full sm:text-sm border border-gray-300 rounded-md py-1 px-2"
              placeholder="Bruce Wayne - Senior Reporting Engineer"
              {...register("cardassignment", { required: false })}
            />
          </div>
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Due Date
          <div className="mt-1">
            <input
              type="date"
              className="shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent block w-full sm:text-sm border border-gray-300 rounded-md py-1 px-2"
              placeholder="DD/MM/YYYY"
              {...register("duedate", { required: true })}
            />
          </div>
        </label>
      </div>
      <button
        className="inline-flex items-center transition duration-300 mb-4  justify-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="submit"
      >
        Save Card
      </button>
    </form>
  );
}

export default App;
