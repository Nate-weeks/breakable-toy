# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



School.create(name: "NorthWood", description: "Residential Treatment: Northwood Children’s Services Main and West Campuses are 24-hour treatment facilities. Within an assigned team of 10-12 students – grouped according to treatment needs, diagnosis, and age – children learn to live with others in a family-like atmosphere.", creator_id: 1)

Classroom.create(name: "Main Campus", description: "24-hour treatment facility with an assigned team of 10-12 students", creator_id: 1, school_id: 1)
Classroom.create(name: "West Campus", description: "24-hour treatment facility with an assigned team of 10-12 students", creator_id: 1, school_id: 1)

School.create(name: "EdgeWood", description: "Edgewood’s Residential Treatment program is a comprehensive educational and mental health program. This program serves youth who have been unsuccessful in public school due to severe behavioral and mental health issues.", creator_id: 1)

Classroom.create(name: "Residential", description: "This program serves youth who have been unsuccessful in public school due to severe behavioral and mental health issues.", creator_id: 1, school_id: 2)
Classroom.create(name: "Hospital Diverstion", description: "Edgewood’s Hospital Diversion Program offers a residential housing alternative to psychiatric hospital and shelter care or temporary placement for children. We assess young people while initiating interventions that help them return home safely. The typical length of stay is ten to twelve days.", creator_id: 1, school_id: 2)

School.create(name: "Brattleboro Retreat", description: "The Brattleboro Retreat provides specialized diagnosis and treatment services for children, adolescents and adults suffering from a wide range of psychiatric and addiction challenges. Since 1834, people from all walks of life have found strength and new hope on our safe, restorative Vermont campus. You can, too.", creator_id: 1)

Classroom.create(name: "Children's Inpatient Program", description: "Acute crisis stabilization, assessment and treatment for children ages 5 to 12 who are experiencing a variety of serious emotional and behavioral challenges.", creator_id: 1, school_id: 3)
Classroom.create(name: "Children's Residential Program", description: "The Abigail Rockwell Children’s Center (ARCC) serves children ages 6 to 14 in a home-like setting with specialized programming & services including mentoring, counseling & family support.", creator_id: 1, school_id: 3)
Classroom.create(name: "Adolescent Residential Facility", description: "The Linden Residential Treatment Center for Adolescents provides compassionate, age-appropriate care for young people ages 13 to 18 with an emphasis on self-discipline, personal accountability and social responsibility.", creator_id: 1, school_id: 3)
Classroom.create(name: "Adolescent Inpatient Program", description: "Acute crisis stabilization for young people ages 13 to 18 who are struggling with a wide range of serious mental health, behavioral and substance abuse issues.", creator_id: 1, school_id: 3)

School.create(name: "Laurel Ridge Treatment Center", description: "Children's Residential Treatment Center The Children’s Residential Treatment Program at Laurel Ridge Treatment Center is specifically designed for children ages four to 12 who require an inpatient setting. The treatment program uses interdisciplinary, evidence-based and age appropriate therapeutic approaches that meet the physical, psychological, social, family and educational needs of children. Individualized treatment goals assist the child in achieving the greatest mental health improvements and allow the child to return to normal activities in their home, school and community.", creator_id: 1)

Student.create(first_name: "Ben", last_name: "Smith", age: "12", address: "123 Arnold Palmer Rd, Brattleboro, Vt, 05301", phone_number: "8029999999", classroom_id: 6)
Student.create(first_name: "Todd", last_name: "Smith", age: "8", address: "123 Arnold Palmer Rd, Brattleboro, Vt, 05301", phone_number: "8029999999", classroom_id: 6)
Student.create(first_name: "Tiffany", last_name: "Sparks", age: "7", address: "987 Blue Valley Rd, Hindsdale, NH, 04365", phone_number: "8029999999", classroom_id: 6)
Student.create(first_name: "John", last_name: "Weyers", age: "9", address: "1345 Blade Runner Hill, Dummerstonville, Vt, 05302", phone_number: "8029999999", classroom_id: 6)
Student.create(first_name: "Stacy", last_name: "Weyers", age: "13", address: "1978 Bunker Hill Rd, Vernon, Vt, 05306", phone_number: "8029999999", classroom_id: 6)
Student.create(first_name: "Rob", last_name: "Groot", age: "8", address: "123 Celebrity Valley Rd, Marlboro, Vt, 05305", phone_number: "8029999999", classroom_id: 6)
Student.create(first_name: "Hillary", last_name: "Goldsmith", age: "14", address: "123 Arnold Palmer Rd, Brattleboro, Vt, 05301", phone_number: "8029999999", classroom_id: 6)
Student.create(first_name: "Ben", last_name: "Smith", age: "12", address: "123 Arnold Palmer Rd, Brattleboro, Vt, 05301", phone_number: "8029999999", classroom_id: 6)
