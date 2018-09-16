import scala.util.matching.Regex
// 3. Pattern matching

def typeMatching(list: List[Any]) = list match {
   case Nil => "Empty list; No types"
   case (head:String) :: _ => "A string list"
   case (head:Int) :: _ => "An integer list"
   case (head:Float) :: _ => "A float list"
   case _ => "Other type of list"
}

// println(typeMatching(List("a", "a"))) // Outputs A string list
// println(typeMatching(List(1.5.toFloat, 2.5.toFloat))) // Outputs A float list
// println(typeMatching(List(1, 2))) // Outputs An integer list


// 4. Regex matching
def regexMatch(str: String) : Option[String] = {
  val numPattern = new Regex("[0-9]+")
  val match1 = numPattern.findFirstIn(str)
  return match1
}

// println(regexMatch("7th floor Galana plaza, Kilimani")) // Outputs Some(7)


// 5. Case class Person
case class Person(name: String, age:Int) {
  require(age > 0)
}


// new Person("Nathnael", 0) // Throws IllegalArgumentException 
