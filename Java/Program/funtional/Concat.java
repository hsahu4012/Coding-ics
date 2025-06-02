interface StringConcatenation {
    String concatenate(String s1, String s2);
}

public class Concat {
    public static void main(String[] args) {
        StringConcatenation concat = (s1, s2) -> s1 + s2;
        System.out.println(concat.concatenate("Hello", "World")); // Output: HelloWorld
    }
}
