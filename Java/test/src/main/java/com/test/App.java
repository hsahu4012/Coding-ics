package com.test;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        List<Integer> list = Arrays.asList(55,5,3,1,2,3,4,5);
        
        list.stream()
        	.map(n->n*2).forEach(n->System.out.println(n));
        
    }
}
