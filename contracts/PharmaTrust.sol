// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PharmaTrust {
    address public Government;

    constructor() {
        Government = msg.sender;
    }

    uint256 public medicineCount = 0;
    uint256 public rmsCount = 0;
    uint256 public  manCount = 0;
    uint256 public distCount = 0;
    uint256 public phCount = 0;

    enum STAGE {
        Init,
        DeniedByRMS,
        RawMaterialSupply,
        Manufacture,
        Distribution,
        Retail,
        sold,
        Terminate
    }

    struct medicine {
        uint256 id; 
        string name; 
        string expDate;
        string description; 
        uint256 RMSid; 
        uint256 MANid; 
        uint256 DISTid; 
        uint256 RETid; 
        STAGE stage;
        uint256 CounterfeitAttempts;
    }
    mapping(uint256 => medicine) public medAvailable;

    function showStage(uint256 _medicineID)
        public
        view
        returns (string memory)
    {
        require(medicineCount > 0);
        if (medAvailable[_medicineID].stage == STAGE.Init)
            return "Medicine Ordered";
        else if (medAvailable[_medicineID].stage == STAGE.DeniedByRMS)
            return "Denied by Raw Material Supplier";    
        else if (medAvailable[_medicineID].stage == STAGE.RawMaterialSupply)
            return "Raw Material Supply Stage";
        else if (medAvailable[_medicineID].stage == STAGE.Manufacture)
            return "Manufacturing Stage";
        else if (medAvailable[_medicineID].stage == STAGE.Distribution)
            return "Distribution Stage";
        else if (medAvailable[_medicineID].stage == STAGE.Retail)
            return "Retail Stage";
        else if (medAvailable[_medicineID].stage == STAGE.sold)
            return "Medicine Sold";
        else if (medAvailable[_medicineID].stage == STAGE.Terminate)
            return "Medicine Terminated";
        return "Unknown Stage";
    }

    struct rawMaterialSupplier {
        address addr;
        uint256 id; 
        string name; 
        string place; 
    }
    mapping(uint256 => rawMaterialSupplier) public RMS;
    mapping(address => uint256) public rmsAddresses;

    struct manufacturer {
        address addr;
        uint256 id;
        string name;
        string place;
    }
    mapping(uint256 => manufacturer) public MAN;
    mapping(address => uint256) public manAddresses;

    struct distributor {
        address addr;
        uint256 id;
        string name;
        string place; 
    }
    mapping(uint256 => distributor) public DIST;
    mapping(address => uint256) public distAddresses;

    struct retailer {
        address addr;
        uint256 id; 
        string name; 
        string place;
    }
    mapping(uint256 => retailer) public RET;
    mapping(address => uint256) public retAddresses;

    modifier onlyByGov() {
        require(msg.sender == Government);
        _;
    }
    modifier onlyByRET {
        uint256 _id = findRET(msg.sender);
        require(_id > 0);
        _;
    }

    function addRMS(address _address,string memory _name,string memory _place) public onlyByGov {
        rmsCount++;
        RMS[rmsCount] = rawMaterialSupplier(_address, rmsCount, _name, _place);
        rmsAddresses[_address] = rmsCount;
    }

    function addManufacturer(address _address,string memory _name,string memory _place) public onlyByGov {
        manCount++;
        MAN[manCount] = manufacturer(_address, manCount, _name, _place);
        manAddresses[_address] = manCount;
    }

    function addDistributor(address _address,string memory _name,string memory _place) public onlyByGov {
        distCount++;
        DIST[distCount] = distributor(_address, distCount, _name, _place);
        distAddresses[_address] = distCount;
    }

    function addRetailer(address _address,string memory _name,string memory _place) public onlyByGov {
        phCount++;
        RET[phCount] = retailer(_address, phCount, _name, _place);
        retAddresses[_address] = phCount;
    }

    //check RMS available in blockchain
    function findRMS(address _address) private view returns (uint256) {
        require(rmsCount > 0);
        return rmsAddresses[_address];
    }

    function findMAN(address _address) private view returns (uint256) {
        require(manCount > 0);
        return manAddresses[_address];
    }

    function findDIS(address _address) private view returns (uint256) {
        require(distCount > 0);
        return distAddresses[_address];
    }

    function findRET(address _address) private view returns (uint256) {
        require(phCount > 0);
        return retAddresses[_address];
    }

    //to check if rm is available
    function deniedByRMS(uint256 _medicineID) public  {
        require(_medicineID > 0 && _medicineID <= medicineCount);
        uint256 _id = findRMS(msg.sender);
        require(_id > 0);
        require(medAvailable[_medicineID].stage == STAGE.Init);
        // medAvailable[_medicineID].RMSid = _id;
        medAvailable[_medicineID].stage = STAGE.DeniedByRMS;
    }

    //supply raw materials from RMS supplier to manufacturer
    function RMSsupply(uint256 _medicineID) public {
        require(_medicineID > 0 && _medicineID <= medicineCount);
        uint256 _id = findRMS(msg.sender);
        require(_id > 0);
        require(medAvailable[_medicineID].stage == STAGE.Init || medAvailable[_medicineID].stage == STAGE.DeniedByRMS ); //checking
        medAvailable[_medicineID].RMSid = _id;
        medAvailable[_medicineID].stage = STAGE.RawMaterialSupply;
    }

    //manufacture medicine
    function Manufacturing(uint256 _medicineID) public {
        require(_medicineID > 0 && _medicineID <= medicineCount);
        uint256 _id = findMAN(msg.sender);
        require(_id > 0);
        require(medAvailable[_medicineID].stage == STAGE.RawMaterialSupply);
        medAvailable[_medicineID].MANid = _id;
        medAvailable[_medicineID].stage = STAGE.Manufacture;
    }

    // supply medicines from Manufacturer to distributor
    function Distribute(uint256 _medicineID) public {
        require(_medicineID > 0 && _medicineID <= medicineCount);
        uint256 _id = findDIS(msg.sender);
        require(_id > 0);
        require(medAvailable[_medicineID].stage == STAGE.Manufacture);
        medAvailable[_medicineID].DISTid = _id;
        medAvailable[_medicineID].stage = STAGE.Distribution;
    }

    //supply medicines from distributor to retailer
    function Retail(uint256 _medicineID) public {
        require(_medicineID > 0 && _medicineID <= medicineCount);
        uint256 _id = findRET(msg.sender);
        require(_id > 0);
        require(medAvailable[_medicineID].stage == STAGE.Distribution);
        medAvailable[_medicineID].RETid = _id;
        medAvailable[_medicineID].stage = STAGE.Retail;
    }

    //sell medicines from retailer to consumer
    function sold(uint256 _medicineID) public {
        require(_medicineID > 0 && _medicineID <= medicineCount);
        uint256 _id = findRET(msg.sender);
        require(_id > 0);
        require(_id == medAvailable[_medicineID].RETid); 
        require(medAvailable[_medicineID].stage == STAGE.Retail);
        medAvailable[_medicineID].stage = STAGE.sold;
    }

    function terminateMedicine(uint256 _medicineID) public onlyByGov {
        require(_medicineID > 0 && _medicineID <= medicineCount, "Invalid medicine ID");
        require(medAvailable[_medicineID].stage != STAGE.Init && medAvailable[_medicineID].stage != STAGE.sold, "Cannot terminate medicine in Init or Sold stage");
        
        medAvailable[_medicineID].stage = STAGE.Terminate;
    }

    //to know counterfeit attempts
    function CounterfeitAttempt(uint256 _medicineID) public {
        require(_medicineID > 0 && _medicineID <= medicineCount);
        uint256 m_id = findMAN(msg.sender);
        uint256 r_id = findRMS(msg.sender);
        uint256 d_id = findDIS(msg.sender);
        uint256 re_id = findRET(msg.sender);
        if((m_id>0 && r_id>0 && d_id>0 && re_id>0) == false){
            medAvailable[_medicineID].CounterfeitAttempts++;
        }
        // return medAvailable[_medicineID].CounterfeitAttempts;
    }

     // add new medicines to the stock
    function addMedicine(string memory _name,string memory _expdate, string memory _description)
        public
        onlyByRET()
    {
        require((rmsCount > 0) && (manCount > 0) && (distCount > 0) && (phCount > 0 ));
        medicineCount++;
        medAvailable[medicineCount] = medicine(
            medicineCount,
            _name,
            _expdate,
            _description,
            0,
            0,
            0,
            0,
            STAGE.Init,
            0
    );
}
}