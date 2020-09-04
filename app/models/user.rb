class User < ApplicationRecord
  has_secure_password

  has_many :job_users
  has_many :jobs, through: :job_users
end
