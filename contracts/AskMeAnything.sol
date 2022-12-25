//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";

contract AskMeAnything {
    using Counters for Counters.Counter;
    address public owner;

    struct Question {
        uint256 id;
        string question_string;
        string answer;
    }
    mapping(address => string) private addressToUsername;
    mapping(string => bool) private usernames;

    mapping(string => Question[]) private user_questions;

    mapping(string => Counters.Counter) private counterMap;

    event RegisteredUser(address user, string username);
    event AddedQuestion(string username, string question);
    event AddedAnswer(string username, uint256 id);

    constructor() {
        owner = msg.sender;
    }

    function registerUser(string memory _username) public {
        require(!usernames[_username], "Username not available.");
        addressToUsername[msg.sender] = _username;
        usernames[_username] = true;
        emit RegisteredUser(msg.sender, _username);
    }

    function registerQuestion(
        string memory _username,
        string memory _question_string
    ) public {
        require(usernames[_username], "Username not found.");
        if (user_questions[_username].length == 0) {
            counterMap[_username]._value = 0;
        }
        uint256 _id = Counters.current(counterMap[_username]);
        user_questions[_username].push(
            Question({id: _id, question_string: _question_string, answer: ""})
        );
        Counters.increment(counterMap[_username]);
        emit AddedQuestion(_username, _question_string);
    }

    function getUserQuestions(string memory _username)
        public
        view
        returns (Question[] memory)
    {
        return user_questions[_username];
    }

    function addAnswer(
        string memory _username,
        uint16 _id,
        string memory _answer
    ) public {
        Question[] storage ques = user_questions[_username];
        ques[_id].answer = _answer;
        emit AddedAnswer(_username, _id);
    }

    function getUser() public view returns (string memory) {
        return addressToUsername[msg.sender];
    }
}
