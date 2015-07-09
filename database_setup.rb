# Load/create our database for this program.
CONNECTION = SQLite3::Database.new("lavoe.db")

# Make the tables.
CONNECTION.execute("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY, question TEXT UNIQUE, choice TEXT, answer INTEGER);")

# Get results as an Array of Hashes.
CONNECTION.results_as_hash = true
