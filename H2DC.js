// A simple hours to days calculator
println("Hours to days calculator")
var days = 0
var hours = readInt("Enter Hours ");
var remhours = 0
days = (hours / 24);
remhours = (hours % 24);

println(hours + " Hours is equivalent to about " + (Math.trunc(days)) + " day[s]" + " and " + remhours + " hour[s]")
