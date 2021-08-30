# Aavegotchi Auto Petter

Run pet-gotchi.ts to run a script that pets your gotchi every 12.1 hours.

1. Clone respository
2. Create .env file according to env_example. Get the tx data from "Pet All" and use that for TX_DATA field.
3. Run the following commands:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash #Install nvm
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install 16 #This installs node v16
npm install hardhat #Install hardhat
```

4. To run any scripts, use npx hardhat run scripts/script.ts
