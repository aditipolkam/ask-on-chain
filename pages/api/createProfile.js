export default async function createProfile(name, bio) {
  console.log("Creating profile with name: ", name, " and bio: ", bio);
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      const transaction = await contract.registerUser(name, bio);
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        console.log(`${name} created!`);
        return;
      }
      console.log(`failed to create ${name}`);
    }
  } catch (err) {
    console.log("Error: ", err);
  }
}
