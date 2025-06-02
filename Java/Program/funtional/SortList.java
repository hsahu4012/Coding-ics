import java.util.*;

class sortList {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 3, 5, 7, 9, 2, 4, 6, 8);
        numbers.sort((a, b) -> b - a);
        System.out.println(numbers); // Output: [9, 8, 7, 6, 5, 4, 3, 2, 1]
    }
}
