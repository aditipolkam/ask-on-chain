import contractAbi from "../../utils/contractAbi";
import contractAddress from "../../utils/contractAddress";
import { ethers } from "ethers";

export default async function registerQuestion(username, question) {
  console.log(username, question);
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
      const transaction = await contract.registerQuestion(username, question);
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        console.log(`question registered`);
        return;
      }
      console.log(`failed`);
    }
  } catch (err) {
    console.log("Error: ", err);
  }
}
