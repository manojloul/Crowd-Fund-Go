// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Funder {
    mapping(address => bool) contributors;
    mapping(address => uint256) contributes;

    uint256 public cont;
    address public manager;
    uint256 public extra;

    struct Request {
        uint256 id;
        string img_hash;
        string file_hash;
        string category;
        string description;
        address payable recipient;
        uint256 deadline;
        uint256 target;
        uint256 raisedAmount;
        bool completed;
        uint256 noOfDonors;
        uint256 approved;
    }

    mapping(address => uint256[]) whocreaterequest; //to see Who creates a particular request
    mapping(uint256 => Request) public requests; // keep id,record pair
    uint256 public numRequests; // keep count of requests

    constructor() {
        manager = msg.sender;
    }

    receive() external payable {}

    // function for donors to donate the amount for a request
    function sendEth(uint256 i) public payable returns (bool) {
        require(block.timestamp < requests[i].deadline, "deadline passed");
        require(
            requests[i].raisedAmount < requests[i].target,
            "target Achieved"
        );
        // if(requests[i].donors[msg.sender]==0)
        requests[i].noOfDonors++;
        if (contributors[msg.sender] == false) {
            contributors[msg.sender] = true;
            cont++;
        }

        requests[i].raisedAmount += msg.value;
        contributes[msg.sender] += msg.value;

        if (requests[i].raisedAmount >= requests[i].target) {
            extra += (requests[i].raisedAmount - requests[i].target);
            makePayment(i);
        }
        return true;
    }

    modifier onlyManger() {
        require(msg.sender == manager, "Only manager can calll this function");
        _;
    }

    // function to know contract balance
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // function for creating request
    function createRequests(
        string memory cate,
        string memory _description,
        string memory imghash,
        string memory filehash,
        address payable _recipient,
        uint256 _time,
        uint256 _target
    ) public {
        // require(block.timestamp>_time,"deadline passed");
        Request storage newRequest = requests[numRequests];
        newRequest.id = numRequests;
        newRequest.category = cate;
        newRequest.img_hash = imghash;
        newRequest.file_hash = filehash;
        newRequest.description = _description;
        newRequest.recipient = _recipient;
        newRequest.deadline = _time;
        newRequest.target = _target;
        newRequest.raisedAmount = 0;
        newRequest.completed = false;
        newRequest.approved = 0;
        newRequest.noOfDonors = 0;
        whocreaterequest[msg.sender].push(numRequests);
        numRequests++;
    }

    //function to get no of request an particular address creates
    function seemyrequests() public view returns (Request[] memory) {
        Request[] memory yrequest = new Request[](
            (whocreaterequest[msg.sender]).length
        );

        for (uint256 i = 0; i < whocreaterequest[msg.sender].length; i++) {
            Request storage lBi = requests[(whocreaterequest[msg.sender])[i]];
            yrequest[i] = lBi;
        }
        return yrequest;
    }

    //function to validate an pending request
    function isApproved(uint256 id, uint256 a) public onlyManger {
        requests[id].approved = a;
    }

    //function to return request details
    function getRequest(uint256 id) public view returns (Request memory) {
        Request storage r = requests[id];
        return r;
    }

    function getBid() public view returns (Request[] memory) {
        Request[] memory lBids = new Request[](numRequests);
        for (uint256 i = 0; i < numRequests; i++) {
            //  require(requests[i].completed==false);
            Request storage lBid = requests[i];
            lBids[i] = lBid;
        }
        return lBids;
    }

    // function to return manager address
    function getmanager() public view returns (address) {
        return manager;
    }

    //function to get count of requests
    function getRequestNo() public view returns (uint256) {
        return numRequests;
    }

    //function to send the raised ami=ount to receipients address
    function makePayment(uint256 i) public payable {
        //    for(uint i=0;i<numRequests;i++)
        //    {
        Request storage thisRequest = requests[i];
        require(thisRequest.deadline >= block.timestamp, "Deadline Passed");
        require(
            thisRequest.raisedAmount >= requests[i].target,
            "Target not Acheived Yet"
        );
        require(thisRequest.approved == 1, "Request not approved");
        require(
            thisRequest.completed == false,
            "The request has been completed"
        );
        payable(thisRequest.recipient).transfer(
            ((thisRequest.raisedAmount) * 99) / 100
        );
        thisRequest.completed = true;
        thisRequest.approved = 1;
        //    }
    }

    //function to check amount an particular address has donate
    function contri() public view returns (uint256) {
        return contributes[msg.sender];
    }
}
