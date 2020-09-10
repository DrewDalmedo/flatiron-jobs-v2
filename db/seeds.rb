# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# jobs
job_one = Job.new()

job_one.job_type = "Full Time"
job_one.company = "Sticker Mule"
job_one.company_url = "https://www.stickermule.com/careers"
job_one.location = "Anywhere"
job_one.title = "Site Reliability Engineer"
job_one.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Odio ut sem nulla pharetra diam sit amet. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Eget nunc scelerisque viverra mauris in aliquam."
job_one.how_to_apply = "Apply here: imtotallyavalidlink.yes"

job_one.save()


job_two = Job.new()

job_two.job_type = "Part Time"
job_two.company = "Dalmedo Holdings"
job_two.company_url = "https://dalmedoholdings.notreal"
job_two.location = "Remote"
job_two.title = "Junior Software Engineer"
job_two.description = "egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at"
job_two.how_to_apply = "https://dalmedoholdings.notreal"

job_two.save()


job_three = Job.new

job_three.job_type = "Contract"
job_three.company = "DuckDuckGoose"
job_three.company_url = "https://duckduckquack.notreal"
job_three.location = "New York, NY"
job_three.title = "World Domination Mastermind"
job_three.description = "bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit"
job_three.how_to_apply = "You don't"

job_three.save


job_four = Job.new

job_four.job_type = "Full Time"
job_four.company = "Bungee"
job_four.company_url = "https://bungee.notreal"
job_four.location = "San Francisco, CA"
job_four.title = "Software Engineer"
job_four.description = "mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo"
job_four.how_to_apply = "https://bungee.notreal"

job_four.save