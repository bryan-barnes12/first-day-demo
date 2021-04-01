name = input("Name:")
question = input("""What is your question? (yes or no questions only, please):""")
answer = ""
print(name + " asks the question: " + question)

import random
random_number = random.randint(1,9)
random_number1 = random.randint(1,9)

if random_number == 1:
  print("Yes - definitely")
elif random_number == 2:
  print("It is decidedly so.")
elif random_number == 3:
  print("Without a doubt.")
elif random_number == 4:
  print("Reply hazy, try again.")
elif random_number == 5:
  print("Ask again later.")
elif random_number == 6:
  print("Better not tell you now.")
elif random_number == 7:
  print("My sources say no.")
elif random_number == 8:
  print("Outlook not so good.")
elif random_number == 9:
  print("Very doubtful.")
else:
  print("Error")

answer = input("Do you like your answer (yes or no)?")
if answer == str("yes"):
    print("Great! Thanks for playing!")
else:
    print("Okay. I'll give you one more chance...")


if answer == str("yes"):
    print("")
elif (answer == str("no")) and (random_number1 == 1):
  print("Yes - definitely")
elif (answer == str("no")) and (random_number1 == 2):
  print("It is decidedly so.")
elif (answer == str("no")) and (random_number1 == 3):
  print("Without a doubt.")
elif (answer == str("no")) and (random_number1 == 4):
  print("Reply hazy, try again.")
elif (answer == str("no")) and (random_number1 == 5):
  print("Ask again later.")
elif (answer == str("no")) and (random_number1 == 6):
  print("Better not tell you now.")
elif (answer == str("no")) and (random_number1 == 7):
  print("My sources say no.")
elif (answer == str("no")) and (random_number1 == 8):
  print("Outlook not so good.")
elif (answer == str("no")) and (random_number1 == 9):
  print("Very doubtful.")
else:
  print("Error")
