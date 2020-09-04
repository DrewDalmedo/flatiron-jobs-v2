# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# jobs
job_one = Job.new()

job_one.id = SecureRandom.uuid
job_one.job_type = "Full Time"
job_one.company = "Sticker Mule"
job_one.company_url = "https://www.stickermule.com/careers"
job_one.location = "Anywhere"
job_one.title = "Site Reliability Engineer"
job_one.description = "Test Description"
job_one.how_to_apply = "Apply here: imtotallyavalidlink.yes"

job_one.save()