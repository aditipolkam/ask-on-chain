import contractAbi from "../../utils/contractAbi";
import contractAddress from "../../utils/contractAddress";
import { ethers } from "ethers";

export default async function getUserQuestions(username) {
  console.log("u", username);
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
      const questions = await contract.getUserQuestions(username);
      console.log(questions);
      if (questions) {
        console.debug("questions", questions);
        let returnable_questions = [];
        for (let i = 0; i < questions.length; i++) {
          console.log(i, questions[i]);
          returnable_questions.push({
            id: Number(questions[i].id),
            question_string: questions[i].question_string,
            answer: questions[i].answer,
          });
        }
        return returnable_questions;
      } else {
        console.debug("Empty links");
      }
      return [];
    }
  } catch (err) {
    console.log("Error: ", err);
  }
}
