export default function Page() {
    const address = "Toranet Ltd\nThe Cloisters\n4 Hillside Road\nAldershot\nHampshire\nGU11 3NB";
    const email = "info@torasense.co.uk";
    const phone = "01252811336";

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md p-6 bg-white shadow-md bg-opacity-75 rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-4 text-orange-500">Industries Page</h1>
                <div className="mb-4">
                    <h2 className="font-semibold text-orange-500">Address:</h2>
                    <p className="text-orange-500">{address}</p>
                </div>
                <div className="mb-4">
                    <h2 className="font-semibold text-orange-500">Email:</h2>
                    <p className="text-orange-500">{email}</p>
                </div>
                <div className="mb-4">
                    <h2 className="font-semibold text-orange-500">Phone:</h2>
                    <p className="text-orange-500">{phone}</p>
                </div>
            </div>
        </div>
    );
}