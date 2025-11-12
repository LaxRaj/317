const sqlite3 = require("sqlite3").verbose();

// Create a database
const db = new sqlite3.Database("animals.db", (err) => {
  if (err) {
    return console.error("Error opening database:", err.message);
  }
  console.log("Connected to the animals database.");
});

// table creation
db.run(`
  CREATE TABLE IF NOT EXISTS Animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    habitat TEXT NOT NULL,
    life_expectancy INTEGER,
    in_danger INTEGER
  )
`, (err) => {
  if (err) {
    return console.error("Error creating table:", err.message);
  }
  console.log("Animals table created (if it didn't already exist).");
  
  // After table is created, proceed with inserting data
  insertData();
});

// data insertion
function insertData() {
  const insertQuery = `
    INSERT INTO Animals (name, habitat, life_expectancy, in_danger)
    VALUES (?, ?, ?, ?)
  `;

  // Insert animals sequentially to ensure proper order
  db.run(insertQuery, ["Elephant", "Savannah", 60, 1], function(err) {
    if (err) {
      return console.error("Error inserting Elephant:", err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    
    db.run(insertQuery, ["Turtle", "Ocean", 100, 0], function(err) {
      if (err) {
        return console.error("Error inserting Turtle:", err.message);
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
      
      db.run(insertQuery, ["Dog", "Domestic", 13, 0], function(err) {
        if (err) {
          return console.error("Error inserting Dog:", err.message);
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`);
        
        // After all inserts are done, run queries
        runQueries();
      });
    });
  });
}

// queries
function runQueries() {
  console.log("\n=== Running Queries ===\n");

  // 5.1 Selecting Data - View all animals
  db.all("SELECT * FROM Animals", (err, rows) => {
    if (err) {
      return console.error("Error fetching data:", err.message);
    }
    console.log("All Animals:", rows);
    console.log("\n");
    
    // 5.2 Selecting with Conditions - Animals with life expectancy > 50
    db.all("SELECT * FROM Animals WHERE life_expectancy > ?", [50], (err, rows) => {
      if (err) {
        return console.error("Error fetching data:", err.message);
      }
      console.log("Animals with life expectancy over 50 years:", rows);
      console.log("\n");
      
      // 5.3 Updating Data - Mark Dog as in danger
      db.run("UPDATE Animals SET in_danger = ? WHERE name = ?", [1, "Dog"], function(err) {
        if (err) {
          return console.error("Error updating data:", err.message);
        }
        console.log(`Rows updated: ${this.changes}`);
        
        // After update, show updated data
        db.all("SELECT * FROM Animals WHERE name = ?", ["Dog"], (err, rows) => {
          if (err) {
            return console.error("Error fetching data:", err.message);
          }
          console.log("Updated Dog record:", rows);
          console.log("\n");
          closeDatabase();
        });
      });
    });
  });
}

// database connection closing
function closeDatabase() {
  db.close((err) => {
    if (err) {
      return console.error("Error closing the database:", err.message);
    }
    console.log("Database connection closed.");
  });
}

