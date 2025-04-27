
const ContractAddress = () => {
    const address = "Gom5MqTo1QmoUYvt139DJ938gaRvYS2qCoN5hCbjyTdQ";
  
    return (
      <div className="w-full max-w-3xl mx-auto text-center mt-16 mb-8">
        <h2 className="text-3xl font-bold mb-6">Contract Address</h2>
        <div className="bg-orange-400 text-white p-4 rounded-lg shadow-lg mx-4">
          <p className="break-all font-mono">{address}</p>
        </div>
      </div>
    );
  };
  
  export default ContractAddress;