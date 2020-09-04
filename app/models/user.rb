class User < ApplicationRecord
  has_secure_password

  has_many :job_users
  has many :jobs, through: :job_users
end
