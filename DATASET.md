Dataset API

Killed in Gaza
Latest data available is as of July 15, 2025 (see source info below).

The names & numbers we publish here are not fully representative of the human toll of Israel's actions in Gaza. Read more about other factors you should consider.

There are 58,380 in this list of names of those known to have been killed in Gaza since October 7, 2023. Of these, 1,109 were senior ladies, 1,740 were senior men, 10,020 were women, 27,590 were men, 7,602 were girls and 10,319 were boys.
Usage
The dataset is available as a single JSON array with an object for each person killed in Gaza. You can also download in CSV format below.

Minified
https://data.techforpalestine.org/api/v2/killed-in-gaza.min.json

Unminified
https://data.techforpalestine.org/api/v2/killed-in-gaza.json

Paging
Given the size of this list, request times may be long. You can fetch the list incrementally in pages of 100 using the following format (keeping in mind that these pages may not have consistent ordering over time):

https://data.techforpalestine.org/api/v2/killed-in-gaza/page-1.json

Fields
Each record will have the following fields:

Key	Value
name	original arabic name from the source list
en_name	english name translation
id	unique string (do not depend on format, it may change), and it may not be provided
dob	date of birth: string in YYYY-MM-DD format, or empty string if not available
sex	string of one of m for male or f for female
age	age as a number
source	string indicating the source of the record (either h for "Ministry of Health", c for "Public Submission", j for "judicial or house committee", u for "unknown")
English Name Translation
For a discussion of our translation methodology, see our February update.

Child Name Counts
For counts of the top 10 translated first names by age group (man, woman, boy, and girl), you can reference this JSON API:

https://data.techforpalestine.org/api/v2/killed-in-gaza/name-freq-en.json

This dataset is used to derive estimates of children killed for our home page name cards as documented on our Summary dataset page.

Source
The file is updated when a new list is released by Gaza's Ministry of Health.

This list incorporates the following releases from the Ministry of Health:

The first was as of January 5th for hospitals reporting in the South and November 2nd for the North. Additionally, 21 records were included from an earlier release as noted in our Feburary update.
The second was as of March 29th, 2024 and it included submissions from the public to the Ministry (ie: families of those killed). We detailed the changes in our April 13th update.
The third was as of April 30th, 2024 and released on May 5th from the Ministry. We detailed the changes in our June 26th update.
The fourth was as of June 30th, 2024 and released on July 24th from the Ministry. We detailed the changes in our September 7th update.
The fifth was as of August 31st, 2024 and released around September 15th by the Ministry. We detailed the changes in our September 21st update.
The sixth was as of March 23rd, 2025, and released on the same day by the Ministry via Iraq Body Count. We detailed the changes in our May 11th update.
The seventh was as of June 15th, 2025, and released on June 23rd from the Ministry via Iraq Body Count. We detailed the changes in our July 6th update.
The eighth was as of July 15th, 2025, and released on July 16th from the Ministry via Iraq Body Count. We detailed the changes in our July 20th update.
In their initial January update, the Ministry indicated the following about the list:

The missing persons and the bodies of those trapped under the rubble were not counted.
The unidentified people who arrived at hospitals were not counted.
The unidentified persons whose bodies were handed over by the occupation were not counted.
Those who were buried by their families without passing through hospitals were not counted.
The victims in Gaza and North Gaza were not counted after the date of stopping the information system in November.
The aggregate numbers in the Daily Casualties - Gaza dataset will necessarily diverge from this list due to the number of unidentified people.

Press Killed in Gaza
There are 236 in this list of names of journalists known to have been killed in Gaza since October 7, 2023.
Usage
The dataset is available as a single JSON array with an object for each journalist killed in Gaza. You can also download in CSV format below.

Minified
https://data.techforpalestine.org/api/v2/press_killed_in_gaza.min.json

Unminified
https://data.techforpalestine.org/api/v2/press_killed_in_gaza.json

Fields
Each record will have the following fields:

Key	Value
name	original arabic name from the source list
name_en	english name translation
notes	includes agency they worked for & available detail on how they were killed

Summary Data
This dataset provides a summary of the latest values from each dataset:

for Killed in Gaza it provides composition information by gender and age group
for Daily Casualties in Gaza and the West Bank it provides cumulative values from the latest reported day
Usage
Minified
https://data.techforpalestine.org/api/v3/summary.min.json

Unminified
https://data.techforpalestine.org/api/v3/summary.json

The file is updated whenever the other datasets are updated (typically daily).

Fields
The object has three root-level fields:

gaza
Has the latest cumulative values from the last daily report from our Gaza Daily Casualties dataset:

field name	value
reports	number of days with reports in the underlying data series
last_update	YYYY-MM-DD for last report date including these values
massacres	number of single events leading to multiple fatalities
killed.total	total number of people killed to the report date
killed.children	total number of children killed to the report date
killed.civil_defence	total number of emergency personnel killed to the report date
killed.women	total number of women killed to the report date
killed.press	total number of journalists killed to the report date
killed.medical	total number of medical personnel killed to the report date
injured.total	total number of people injured to the report date
west_bank
Has the latest cumulative values from the last daily report from our West Bank Daily Casualties dataset:

field name	value
reports	number of days with reports in the underlying data series
last_update	YYYY-MM-DD for last report date including these values
settler_attacks	number of attack events by settlers against civilians
killed.total	total number of people killed to the report date
killed.children	total number of children killed to the report date
injured.total	total number of people injured to the report date
injured.children	total number of children injured to the report date
known_killed_in_gaza
Has summary values showing the composition of names by gender & age grouping for our Killed in Gaza dataset:

field name	value
records	number of names in the list
male.senior	number of men aged 65 or older
male.adult	number of men between 65 and 17, exclusive
male.child	number of boys under 18
male.no_age	number of men with no birth date
female.senior	number of women aged 65 or older
female.adult	number of women between 65 and 17, exclusive
female.child	number of girls under 18
female.no_age	number of women with no birth date
known_press_killed_in_gaza
Includes the count of records in the Press Killed in Gaza dataset:

field name	value
records	number of names in the list
If you want the latest number of journalists killed in Gaza, consider using the killed.press value from the gaza section, above. This value is reported independently and while we aim to keep it in sync, the name list updates may lag the daily casualties counts.

Killed Children by Name Usage
This dataset, combined with the count of child names from our Killed in Gaza dataset, is used to derive an estimate of how many children with a particular name have been killed so far across Gaza and the West Bank. The logic for this calculation can be seen here in javascript on Github. It's available as a JSON API that updates as both this summary dataset and our Killed in Gaza names list receive updates:

https://data.techforpalestine.org/api/v2/killed-in-gaza/child-name-counts-en.json


Infrastructure Damaged
This dataset provides daily values for the damaged infrastructure resulting from Israel's assault on Gaza since October 7th, 2023.

Usage
The dataset is available as a single JSON array with an object for each report date.

Minified
https://data.techforpalestine.org/api/v3/infrastructure-damaged.min.json

Unminified
https://data.techforpalestine.org/api/v3/infrastructure-damaged.json

The file is updated in the morning (eastern time).

Report Fields
Each daily report in this JSON array will have the following fields.

(optional fields will be omitted from the JSON if there is no value reported)

field name	value	optional
report_date	date in YYYY-MM-DD	no
civic_buildings.destroyed	cumulative number of government buildings destroyed to the report date	yes
civic_buildings.ext_destroyed	same as civic_buildings.destroyed but extrapolated (see below)	no
educational_buildings.destroyed	cumulative number of educational buildings (schools, universities, etc) destroyed to the report date	yes
educational_buildings.ext_destroyed	same as educational_buildings.destroyed but extrapolated (see below)	no
educational_buildings.damaged	cumulative number of educational buildings partially damaged to the report date	yes
educational_buildings.ext_damaged	same as educational_buildings.damaged but extrapolated (see below)	no
places_of_worship.mosques_destroyed*	cumulative number of mosques destroyed to the report date	yes
places_of_worship.ext_mosques_destroyed	same as places_of_worship.mosques_destroyed but extrapolated (see below)	no
places_of_worship.mosques_damaged*	cumulative number of mosques partially damaged to the report date	yes
places_of_worship.ext_mosques_damaged	same as places_of_worship.mosques_damaged but extrapolated (see below)	no
places_of_worship.churches_destroyed	cumulative number of churches destroyed to the report date (christian or other denomination)	yes
places_of_worship.ext_churches_destroyed	same as places_of_worship.churches_destroyed but extrapolated (see below)	no
residential.destroyed	cumulative number of residential units destroyed to the report date	yes
residential.ext_destroyed	same as residential.destroyed but extrapolated (see below)	no
* Note that the distribution of destroyed vs. damaged mosques shifted considerably in May. In their May 18th report, the number of mosques classified as destroyed sharply increased, while the number classified as damaged decreased. It's unclear whether this is due to reporting difficulties, delays, or a change in classification approach.

Data Sources
For infrastructure damage data, we depend on Government Media Office (GMO) in Gaza . Reports are provided roughly once every week (as of 2024) and it's unclear how frequently government officials are updating these numbers between reports. For that reason they should be treated as estimates, especially given the magnitude and the difficulty for non-combatants to enter certain regions in Gaza where Israeli forces are present.

Extrapolated (ext_ fields)
Since official numbers weren't always available, and it can be useful to have a timeseries where all dates have values, we're providing the same official fields in extrapolated form. For more recent numbers in 2024, these fields will display the latest known value for the last received report date. For earlier reports that were less consistent, we derived incrementing daily values using the difference between two known reporting periods in order to be consistent with how we've provided these ext_ values in our other daily datasets.