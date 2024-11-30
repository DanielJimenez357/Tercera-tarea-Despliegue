terraform {
    required_providers {
    aws = {
        source  = "hashicorp/aws"
    }
    }

    required_version = ">= 1.2.0"
}

provider "aws" {
    shared_config_files      = ["/Users/Usuario/.aws/config"]
    shared_credentials_files = ["/Users/Usuario/.aws/credentials"]
}