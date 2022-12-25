const checkIfWalletIsConnected = async () => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("checkIfWalletIsConnected: Make sure you have metamask!");
      return;
    } else {
      console.log(
        "checkIfWalletIsConnected: We have the ethereum object",
        ethereum
      );
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log(
        "checkIfWalletIsConnected: Found an authorized account:",
        account
      );
      return account;
    } else {
      console.log("checkIfWalletIsConnected: No authorized account found");
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};

export default checkIfWalletIsConnected;
