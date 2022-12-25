import contractAbi from "../../utils/contractAbi";
import contractAddress from "../../utils/contractAddress";
import { ethers } from "ethers";

export default async function answerQuestion(username, id, answer) {
  console.log(username, id, answer);
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
      const transaction = await contract.addAnswer(username, id, answer);
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        console.log(`answerQuestion : success`);
        return;
      }
      console.log(`answerQuestion : failed`);
    }
  } catch (err) {
    console.log("answerQuestion Error: ", err);
  }
}
