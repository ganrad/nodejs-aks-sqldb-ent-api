let config = {}

config.server = "f5wu2pblusqls.database.windows.net";
config.userName = "BlueAdmin";
config.password = "!!123abc";
config.options = {
		rowCollectionOnRequestCompletion: true,
		database: "f5wu2pblusqld-licensing",
		encrypt: true
	}

module.exports = config;
