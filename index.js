const morgan = require("morgan");

routes(){
    this.app.route('/').get((req, res) => res.status(200).json(
    { 'message': 'Hello world!'})
  };

  class App{
    public app: Express.Application;
    private morgan: morgan.Morgan;
    private bodyParser;
    private database: DataBase;

    constructor(){
        this.app = express();
        this.middleware();
        this.routes();
        this.database = new DataBase();
        this.dataBaseConnection();
    }

    dataBaseConnection(){
        this.database.createCoonection();
        }
    closeDataBaseConnection(message, callback){
        this.database.closeDataBaseConnection(message, () => callback());
    }
    }
  }