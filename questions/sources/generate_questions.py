import csv
import json
import glob

for filename in glob.iglob('*.csv'):
    with open(filename, "r", encoding='utf8') as f:
        reader = csv.reader(f)
        next(reader)
        for question, *answer_list in reader:
            print(question)
            answers = []
            for text, survey_count in zip(answer_list[::2], answer_list[1::2]):
                answers.append({"text": text, "surveyCount": int(survey_count)})
            while len(answers) < 8:
                answers.append(None)
            formatted = {
                "text": question,
                "answers": answers
            }
            escaped = question.replace(' ', '_').replace(',', '_').replace('?', '_')
            with open(f"../{escaped}.json", "w+") as output_f:
                json.dump(formatted, output_f)