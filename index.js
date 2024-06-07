const MJR_NFTs = [];

function mintNFT(name, studentNumber, school, course, specialization) {
    // Check for duplicate student numbers
    for (let i = 0; i < MJR_NFTs.length; i++) {
        if (MJR_NFTs[i].StudentNumber === studentNumber) {
            console.log("Error: Student number", studentNumber, "already exists.");
            return;
        }
    }

    const NFT = {
        "Name": name,
        "StudentNumber": studentNumber,
        "School": school,
        "Course": course,
        "Specialization": specialization
    }
    MJR_NFTs.push(NFT);
    console.log(name, "minted successfully");
}

function listNFTs() {
    if (MJR_NFTs.length === 0) {
        console.log("No NFTs minted yet.");
        return;
    }
    
    for (let i = 0; i < MJR_NFTs.length; i++) {
        console.log("--------------------------------------------------");
        console.log(`ID:                      ${i + 1}`);
        console.log(`Name:                    ${MJR_NFTs[i].Name}`);
        console.log(`Student Number:          ${MJR_NFTs[i].StudentNumber}`);
        console.log(`School:                  ${MJR_NFTs[i].School}`);
        console.log(`Course:                  ${MJR_NFTs[i].Course}`);
        console.log(`Specialization:          ${MJR_NFTs[i].Specialization}`);
        console.log("--------------------------------------------------");
    }
}

function getTotalSupply() {
    console.log("Number of Minted NFTs:", MJR_NFTs.length);
}

function updateNFT(studentNumber, newDetails) {
    for (let i = 0; i < MJR_NFTs.length; i++) {
        if (MJR_NFTs[i].StudentNumber === studentNumber) {
            Object.assign(MJR_NFTs[i], newDetails);
            console.log("NFT with student number", studentNumber, "updated successfully.");
            return;
        }
    }
    console.log("Error: No NFT found with student number", studentNumber);
}

function deleteNFT(studentNumber) {
    for (let i = 0; i < MJR_NFTs.length; i++) {
        if (MJR_NFTs[i].StudentNumber === studentNumber) {
            MJR_NFTs.splice(i, 1);
            console.log("NFT with student number", studentNumber, "deleted successfully.");
            return;
        }
    }
    console.log("Error: No NFT found with student number", studentNumber);
}

// Minting NFTs
mintNFT("Jarod", "00000001", "FEU", "Computer Science", "Software Engineering");
mintNFT("Henry", "00000002", "TUP", "Information Technology", "Cyber Security");
mintNFT("Ben", "00000003", "UST", "Computer Science", "Data Science");
mintNFT("Ben", "00000004", "MAPUA", "Information Technology", "Web and Mobile Application");

// Listing NFTs
listNFTs();

// Displaying total supply of NFTs
getTotalSupply();

// Updating an NFT
updateNFT("00000003", { "School": "UP", "Specialization": "Artificial Intelligence" });

// Deleting an NFT
deleteNFT("00000002");

// Listing NFTs again to see changes
listNFTs();

// Displaying total supply again to see changes
getTotalSupply();
