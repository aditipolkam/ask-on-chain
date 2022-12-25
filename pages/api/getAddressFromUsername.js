import contractAbi from "../../utils/contractAbi";
import contractAddress from "../../utils/contractAddress";
import { ethers } from "ethers";

export default async function getAddressFromUsername(username, name, bio) {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );
      const transaction = await contract.registerUser(username, name, bio);
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
