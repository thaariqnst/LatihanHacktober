open class Animal{
    open fun sound(){
        println("animal sound")
    }
}

class Duck : Animal(){
    override fun sound() {
        println("quack quack")
    }
}

class Catt : Animal(){
    override fun sound() {
        println("meow meow ")
    }
}

fun main() {
    val bebek = Duck()
    val kucing = Catt()

    bebek.sound()
    kucing.sound()
