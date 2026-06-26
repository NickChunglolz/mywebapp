variable "region" {
  default = "ap-southeast-1"
}

variable "amplify_app_id" {
  default = "d2gs9o6wqcfxq2"
}

variable "branch" {
  default = "main"
}

variable "github_repo" {
  default = "NickChunglolz/mywebapp"
}

variable "schedule" {
  default = "rate(30 minutes)"
}
