class JobUser < ApplicationRecord
  belongs_to :user, class_name: "user", foreign_key: "user_id"
  belongs_to :job, class_name: "job", foreign_key: "job_id"
end
