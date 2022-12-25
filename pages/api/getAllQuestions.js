import contractAbi from "../../utils/contractAbi";
import contractAddress from "../../utils/contractAddress";
import { ethers } from "ethers";

export default async function getUserQuestions(username) {
  console.log("getAllQuestions: username", username);
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
      console.log("getAllQuestions: questions", questions);
      if (questions) {
        console.log("getAllQuestions : questions", questions);
        let returnable_questions = [];
        for (let i = 0; i < questions.length; i++) {
          console.log(i, questions[i]);
          returnable_questions.push({
            id: Number(questions[i].id._hex),
            question_string: questions[i].question_string,
            answer: questions[i].answer,
          });
        }
        return returnable_questions;
      } else {
        console.debug("getAllQuestions: Empty questions");
      }
      return [];
    }
  } catch (err) {
    console.log("getAllQuestions Error: ", err);
  }
}
