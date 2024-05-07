import csv
import json

def csv_to_json(csv_file, json_file):
    # Read data from CSV and convert it to a list of dictionaries
    data = []
    with open(csv_file, 'r') as csvfile:
        csv_reader = csv.DictReader(csvfile)
        for row in csv_reader:
            data.append(row)
    
    # Write data to JSON file
    with open(json_file, 'w') as jsonfile:
        json.dump(data, jsonfile, indent=4)

csv_to_json(r'C:\Users\gychi\GitHub\GDSC-GNIOT-Completion-Tracker\conversion\input.csv', r'C:\Users\gychi\GitHub\GDSC-GNIOT-Completion-Tracker\main\data.json')
