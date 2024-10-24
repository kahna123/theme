import Layout from '~/components/Layout';

export default function Profile() {

  

  return (
    <Layout>

    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 md:p-16">
        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-32 h-32 rounded-full object-cover shadow-lg"
            src="data:image/jpeg;base64,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"
            alt="Profile"
          />
          <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>

        <div className="mt-8 space-y-4 text-center">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-gray-700 font-semibold">Address</h3>
            <p className="text-gray-600">123 Main Street, New York, NY, USA</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-gray-700 font-semibold">Phone</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-gray-700 font-semibold">Occupation</h3>
            <p className="text-gray-600">Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  


    </Layout>
  );
}