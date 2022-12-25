import contractAbi from "../../utils/contractAbi";
import contractAddress from "../../utils/contractAddress";
import { ethers } from "ethers";

export default async function getUser() {
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
      const username = await contract.getUser();
      return username;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
}
