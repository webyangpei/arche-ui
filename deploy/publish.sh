 #!/usr/bin/expect
yum  install expect

spawn  npm login
expect "Username:"
send "webyangpei \n"
expect "Password"
send "15930022951q;"
