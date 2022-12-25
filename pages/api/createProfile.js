import contractAbi from "../../utils/contractAbi";
import contractAddress from "../../utils/contractAddress";
import { ethers } from "ethers";

export default async function createProfile(username) {
  console.log("Creating profile with username: ", username);
  console.log("contractAddress: ", contractAddress);
  console.log("contractAbi: ", contractAbi);
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
      const transaction = await contract.registerUser(username);
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        console.log(`${username} created!`);
        return;
      }
      console.log(`failed to create ${username}`);
    }
  } catch (err) {
    console.log("Error: ", err);
  }
}
